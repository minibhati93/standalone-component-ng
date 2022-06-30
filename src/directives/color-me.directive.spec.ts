import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorMeDirective } from './color-me.directive';
@Component({
  template: `<span appColorMe>Dummy Text</span> `,
  standalone: true,
  imports: [ColorMeDirective],
})
class HostComponent {}

describe('ColorMeDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    fixture = await TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('span text is yellow', () => {
    const spanElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;
    expect(spanElement.style.backgroundColor).toBe('yellow');
  });
});
