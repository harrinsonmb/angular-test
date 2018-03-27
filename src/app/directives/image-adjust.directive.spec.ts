import { ImageAdjustDirective } from './image-adjust.directive';

describe('ImageAdjustDirective', () => {
  let directive: ImageAdjustDirective;
  let mockImg:any;

  beforeEach(() => {
    mockImg = new Image();
    directive = new ImageAdjustDirective(mockImg);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it(`should set the class 'image--landscape' for landscape or square images`,() => {
    let squareImage = new Image(100,100);
    let landscapeImage = new Image(250,100);
    ImageAdjustDirective.addClass(squareImage);
    ImageAdjustDirective.addClass(landscapeImage);
    expect(squareImage.classList).toContain('image--landscape');
    expect(landscapeImage.classList).toContain('image--landscape');
  });

  it(`should set the class 'image--portrait' for portrait images`, () => {
    let portraitImage = new Image(100,250);
    ImageAdjustDirective.addClass(portraitImage);
    expect(portraitImage.classList).toContain('image--portrait');
  });
});
