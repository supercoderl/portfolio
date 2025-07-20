import { Component, OnInit, OnDestroy, NgZone, Input } from '@angular/core';

@Component({
    selector: 'app-multi-typewriter',
    standalone: true,
    template: `
    <h1 class="typewriter-text">{{ displayText }}<span class="cursor">|</span></h1>
  `,
    styles: [`
    .typewriter-text {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      font-family: monospace;
    }
    .cursor {
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `]
})
export class MultiTypewriterComponent implements OnInit, OnDestroy {
    @Input() textsToType!: string[];

    displayText: string = '';
    private currentTextIndex = 0;
    private currentCharIndex = 0;
    private isDeleting = false;
    private timeoutId: any;

    constructor(private ngZone: NgZone) { }

    ngOnInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.startTypewriter();
        });
    }

    ngOnDestroy(): void {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }

    private startTypewriter(): void {
        const currentText = this.textsToType[this.currentTextIndex];
        const speed = this.isDeleting ? 50 : 100;

        if (!this.isDeleting) {
            this.displayText = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;

            if (this.currentCharIndex === currentText.length) {
                this.timeoutId = setTimeout(() => {
                    this.isDeleting = true;
                    this.startTypewriter();
                }, 1500);
                return;
            }
        } else {
            this.displayText = currentText.substring(0, this.currentCharIndex);
            this.currentCharIndex--;

            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.textsToType.length;
            }
        }

        // Re-enter Angular zone to update UI
        this.timeoutId = setTimeout(() => {
            this.ngZone.run(() => this.startTypewriter());
        }, speed);
    }
}
