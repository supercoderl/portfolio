import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { Experience } from '../../../../../shared/dto';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [SharedModule],
  template: `
    <div
      id="content"
      class="md:flex-[0.9_1_0%] relative rounded-[12px] bg-[#141413] transition-all duration-300 ease-out py-8 md:p-8 overflow-hidden after:hidden md:after:block"
      [ngClass]="{
        'md:scale-105': isExpanded
      }"
    >
      <!-- Main Content -->
      <div
        class="gap-[16px] z-[2] flex flex-wrap md:flex-nowrap items-center justify-between relative"
      >
        <div
          class="md:flex items-center justify-between md:min-w-[500px] mb-0"
          [ngClass]="{
            'md:flex-col md:items-start': isExpanded
          }"
        >
          <div class="w-full">
            <h4 class="text-[#FBFFED] text-[1.525rem] font-bold">
              {{ experience.title }}
            </h4>
          </div>
          <div 
            class="w-full transition-all duration-300"
            [ngClass]="{
              'max-w-[550px]': !isExpanded,
              'max-w-none': isExpanded
            }"
          >
            <p 
              class="mb-0 text-[rgb(159,_160,_166)] italic text-[1rem] transition-all duration-300 overflow-hidden"
              [ngClass]="{
                'line-clamp-2': !isExpanded
              }"
              [ngStyle]="{
                'display': !isExpanded ? '-webkit-box' : 'block',
                '-webkit-line-clamp': !isExpanded ? '2' : 'unset',
                '-webkit-box-orient': !isExpanded ? 'vertical' : 'unset'
              }"
            >
              {{ experience.description }}
            </p>
          </div>
        </div>
        
        <app-button
          className="!p-0 !w-12 !h-12 !rounded-full group transition-all duration-300 ease-out group-hover:-rotate-45"
          (click)="toggleExpanded()"
        >
          <svg
            class="svg-inline--fa fa-arrow-right-long text-[18px] transition-all duration-300 ease-out group-hover:text-white"
            [ngClass]="{
              'text-[#F72C5B]': !isExpanded,
              'text-white': isExpanded
            }"
            *ngIf="!isExpanded"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right-long"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            ></path>
          </svg>
          <svg 
            class="svg-inline--fa text-[18px] transition-all duration-300 ease-out group-hover:text-white"
            viewBox="0 0 512 512" 
            *ngIf="isExpanded"
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>close</title>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Combined-Shape" [attr.fill]="isExpanded ? '#F72C5B' : 'white'" transform="translate(91.581722, 91.581722)">
                      <path d="M298.666667,4.26325641e-14 L328.836556,30.1698893 L194.587,164.418 L328.836556,298.666667 L298.666667,328.836556 L164.418,194.587 L30.1698893,328.836556 L9.9475983e-14,298.666667 L134.248,164.418 L7.10542736e-14,30.1698893 L30.1698893,4.26325641e-14 L164.418,134.248 L298.666667,4.26325641e-14 Z" transform="translate(164.418278, 164.418278) rotate(-360.000000) translate(-164.418278, -164.418278) "></path>
                  </g>
              </g>
          </svg>
        </app-button>
      </div>
      
      <!-- Expanded Content -->
      <div 
        class="transition-all duration-500 ease-out overflow-hidden"
        [ngClass]="{
          'max-h-0 opacity-0': !isExpanded,
          'md:max-h-96 opacity-100 mt-4': isExpanded
        }"
      >
        <div class="pt-4 border-t border-gray-600">
          <!-- Full Content -->
          <div *ngIf="experience.content" class="mb-4">
            <p class="text-[rgb(159,_160,_166)] text-[1.25rem] leading-relaxed">
              {{ experience.content }}
            </p>
          </div>
          
          <!-- Details Section -->
          <div class="space-y-4">
            <!-- Duration -->
            <!-- <div *ngIf="experience.startDate">
              <h5 class="text-[#FBFFED] text-[1.125rem] font-semibold mb-2">Duration</h5>
              <p class="text-[rgb(159,_160,_166)] text-[0.95rem]">
                {{ experience.startDate }}
              </p>
            </div> -->
            
            <!-- Technologies -->
            <div *ngIf="experience.technologies && experience.technologies.length > 0">
              <h5 class="text-[#FBFFED] text-[1.125rem] font-semibold mb-2">Technologies</h5>
              <div class="flex flex-wrap gap-2">
                <span 
                  class="px-3 py-1 bg-[#F72C5B]/10 text-[#F72C5B] rounded-full text-[0.875rem] border border-[#F72C5B]/20"
                  *ngFor="let tech of experience.technologies"
                >
                  {{tech}}
                </span>
              </div>
            </div>
            
            <!-- Achievements -->
            <div *ngIf="experience.archivements && experience.archivements.length > 0">
              <h5 class="text-[#FBFFED] text-[1.125rem] font-semibold mb-2">Achievements</h5>
              <ul class="space-y-2">
                <li 
                  class="text-[rgb(159,_160,_166)] text-[0.95rem] flex items-start"
                  *ngFor="let archivement of experience.archivements"
                >
                  <span class="text-[#F72C5B] mr-2 mt-1">•</span>
                  {{archivement}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: contents;
    }

    #content::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(120deg, rgba(107, 127, 255, 0.5), rgba(196, 239, 23, 0.8));
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      z-index: 0;
      transition: all 0.3s ease-in-out;
      opacity: 0.1;
    }

    #content:hover::after {
        opacity: 1;
    }
  `]
})
export class CardComponent {
  @Input() experience!: Experience;
  isExpanded = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
