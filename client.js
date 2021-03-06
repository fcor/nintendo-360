import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const rightPanel = new Surface(1000, 620, Surface.SurfaceShape.Cylinder);
  r360.renderToSurface(
    r360.createRoot('menu'),
    rightPanel,
  );

  r360.renderToLocation(
    r360.createRoot('model'),
    new Location([3, -2, -10]),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('forest.png'));
}

window.React360 = {init};
