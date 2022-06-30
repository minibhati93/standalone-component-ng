import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CapitalCasePipe } from './capital-case.pipe';
@Component({
  template: `<span>{{ 'dummy text' | capitalCase }}</span> `,
  standalone: true,
  imports: [CapitalCasePipe],
})
class HostComponent {}
describe('CapitalCasePipe', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    fixture = await TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });
  it('create an instance', () => {
    const pipe = new CapitalCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns transformed text', () => {
    const spanElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;
    expect(spanElement.textContent).toBe('Dummy Text');
  });
});
