import { DirectionalLight, LightProbe, PointLight } from 'three';

export function addPointLight(x, y, z) {
  const color = 0xFFFFFF;
  const intensity = 1;
  const distance = 200;
  const light = new PointLight(color, intensity, distance);
  light.position.set(x, y, z);

  return light;
}