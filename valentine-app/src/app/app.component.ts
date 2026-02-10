import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valentine-app';
  @ViewChild('btnNo') noBtn!: ElementRef<HTMLAnchorElement>;
  loveVisible = false;
  originalPos: any; 
  
  ngAfterViewInit() {
    this.originalPos = this.noBtn.nativeElement.style.transform || '';
  }

  runAway(): void {
    if (!this.noBtn?.nativeElement) return;

    const x = Math.random() * 400;
    const y = Math.random() * 400;

    this.noBtn.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }

  refreshNo(): void {
    if (!this.noBtn?.nativeElement) return;

    const x = Math.random() * 400;
    const y = Math.random() * 400;

    this.noBtn.nativeElement.style.transform = this.originalPos
  }
  
  showLoveSection(): void {
    this.loveVisible = true;
    // Optional: scroll smoothly
    setTimeout(() => {
      document.getElementById('love')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}
