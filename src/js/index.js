import * as THREE from "three";
import { OrbitControls } from "./lib/OrbitControls.js";
import getPlanet from "./lib/shapes/getPlanet.js";
import getCloud from "./lib/effects/cloud";
import { addPointLight } from "./lib/effects/light.js";

const init = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = cameraController();
  const orbitControls = new OrbitControls(camera, renderer.domElement)

  const sphereEarth = getPlanet('#59fcff', 'earth');
  sphereEarth.add(getCloud())
  const sphereMoon = getPlanet('#ffffff', 'moon');

  const light = addPointLight(-5, 6, 5);
  const light2 = addPointLight(5, 0, 3);

  scene.background = new THREE.Color(0x000000)


  scene.add(sphereEarth);
  scene.add(sphereMoon);

  scene.add(light);
  scene.add(light2);


  sphereMoon.position.set(5, 5, 5);

  function animate(isRotate = true) {
    if (isRotate) {
      requestAnimationFrame( animate );

      sphereMoon.rotation.x += 0.001;
      sphereMoon.rotation.y += 0.001;

      sphereEarth.rotation.x += 0.0001;
      sphereEarth.rotation.y += 0.0008;
    }
    renderer.render( scene, camera );
  }
  animate();


  function cameraController() {
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.set( 0, 10, 60 );
    camera.lookAt( 0, 0, 0 );

    // camera.position.x = 1;
    camera.position.y = 10;
    camera.position.z = 10;

    camera.lookAt(new THREE.Vector3(0,0,0));

    return camera;
  }

  orbitControls.update();
}

init();