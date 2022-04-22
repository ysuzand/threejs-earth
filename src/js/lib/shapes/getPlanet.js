import { Color, SphereGeometry, ImageUtils, MeshPhongMaterial, Mesh, TextureLoader } from 'three';
import earthBumpMap from "url:../../../assets/earthMaps/earth_bump.jpg";
import earthColorMap from "url:../../../assets/earthMaps/earth_color.jpg";
import earthSpecularMap from "url:../../../assets/earthMaps/earth_specular.jpg";
import moonBumpMap from "url:../../../assets/moonMaps/moon_bump.jpg";
import getCloud from '../effects/cloud';

export default function getPlanet(color = 0x44aa88, type) {
  let geometry;
  const textureLoader = new TextureLoader();
  let textureMap;
  if(type === 'earth') {
    textureMap = textureLoader.load(earthBumpMap);
    geometry = new SphereGeometry(6, 50, 50);
  } else if (type === 'moon') {
    textureMap = textureLoader.load(moonBumpMap);
    geometry = new SphereGeometry(0.5, 20, 20);
  } else {
    geometry = new SphereGeometry(0.5, 20, 20);
  }

  const material = new MeshPhongMaterial({
    // color,
    bumpMap: type === 'earth' ? textureMap : null,
    bumpScale: 0.5,
    map: type === 'moon' ? textureMap : new TextureLoader().load(earthColorMap),
    specularMap: type === 'earth' ? new TextureLoader().load(earthSpecularMap) : null,
    // specular: new Color('grey'),
    // emissive:  type === 'earth' ? 0x23e8e : 0x212121,
    // metalness: 0.5
  });

  return new Mesh(geometry, material);
}