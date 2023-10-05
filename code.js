var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7c0d893c-b4c4-40f5-843e-971e716fa1b5","e2fa7bae-d3fb-4ee0-81a8-d91496604cae","f71f66d0-4e98-4ee6-a195-6ef4acdda704","d654fc29-df1d-4d5d-999a-02a1fe9b61df","33b1553b-e921-4f80-862b-dcbd261a7d50","3635d82f-ea12-4066-a55f-1163a3027903","0afbc8b7-e4a2-4964-bcc9-d20b57fdb9c5"],"propsByKey":{"7c0d893c-b4c4-40f5-843e-971e716fa1b5":{"name":"background_landscape07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"},"e2fa7bae-d3fb-4ee0-81a8-d91496604cae":{"name":"red_shirt_hand_up2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR/category_people/red_shirt_hand_up2.png","frameSize":{"x":174,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hLsHWGuXD9WN_9LOAW97U7QZkkcXM_MR/category_people/red_shirt_hand_up2.png"},"f71f66d0-4e98-4ee6-a195-6ef4acdda704":{"name":"blue_shirt_hand_up_1","sourceUrl":null,"frameSize":{"x":190,"y":392},"frameCount":1,"looping":true,"frameDelay":12,"version":"i3laeC.DjLRWulk7xpdby7sDc_z.FFAO","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":392},"rootRelativePath":"assets/f71f66d0-4e98-4ee6-a195-6ef4acdda704.png"},"d654fc29-df1d-4d5d-999a-02a1fe9b61df":{"name":"blue_dress_wave_1","sourceUrl":null,"frameSize":{"x":166,"y":378},"frameCount":1,"looping":true,"frameDelay":12,"version":"QrsOyKv6KU0W00WNdJfQoI6O_Td6hRBM","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":166,"y":378},"rootRelativePath":"assets/d654fc29-df1d-4d5d-999a-02a1fe9b61df.png"},"33b1553b-e921-4f80-862b-dcbd261a7d50":{"name":"ladder2.png_1","sourceUrl":"assets/v3/animations/Jjb4S08k_CvJo_Y66DWMAxFZtrweTI8BvjW15BIU0Zs/33b1553b-e921-4f80-862b-dcbd261a7d50.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"TPLpucX5Rm0kh9QrgQxrdYDffNhaPoE4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/Jjb4S08k_CvJo_Y66DWMAxFZtrweTI8BvjW15BIU0Zs/33b1553b-e921-4f80-862b-dcbd261a7d50.png"},"3635d82f-ea12-4066-a55f-1163a3027903":{"name":"appletree1.png_1","sourceUrl":null,"frameSize":{"x":382,"y":461},"frameCount":1,"looping":true,"frameDelay":12,"version":"5gE2zdCJPLSBUIciO5bISffHv0R7bvyC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":461},"rootRelativePath":"assets/3635d82f-ea12-4066-a55f-1163a3027903.png"},"0afbc8b7-e4a2-4964-bcc9-d20b57fdb9c5":{"name":"sun_happy_1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":12,"version":"4ZuxI8UVhB6f2XGg5F8T74h46PUEnoIi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":300},"rootRelativePath":"assets/0afbc8b7-e4a2-4964-bcc9-d20b57fdb9c5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background1 = createSprite(200, 200);
background1.setAnimation("background_landscape07_1");
var tree = createSprite(200, 290);
tree.setAnimation("appletree1.png_1");
tree.scale = 0.5;
var ladder = createSprite(110, 350);
ladder.setAnimation("ladder2.png_1");
ladder.scale = 0.18;
var boy1 = createSprite(115, 290);
boy1.setAnimation("red_shirt_hand_up2_1");
boy1.scale = 0.3;
var girl1 = createSprite(320, 340);
girl1.setAnimation("blue_dress_wave_1");
girl1.scale = 0.3;
var sun = createSprite(325, 60);
sun.setAnimation("sun_happy_1");
sun.scale = 0.7;
drawSprites();
fill("red");
regularPolygon(323, 287, 3, 13);
fill("brown");
rect(20, 360, 50, 30);
fill("black");
text("what a beautiful day!", 55, 200);
text("YUM!", 310, 260);


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
