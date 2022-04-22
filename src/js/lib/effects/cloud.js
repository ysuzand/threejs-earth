import { SphereGeometry, CanvasTexture, MeshPhongMaterial, Mesh, TextureLoader, DoubleSide } from 'three';
import canvasCloud from "url:../../../assets/earthMaps/earth_cloud.jpg";

const getCloud = () => {
  const geometry   = new SphereGeometry(6.05, 52, 52)
  const material  = new MeshPhongMaterial({
    map         : new TextureLoader().load(canvasCloud),
    side        : DoubleSide,
    opacity     : 0.7,
    transparent : true,
    // depthWrite  : false,
  });

  return new Mesh(geometry, material)
}

export default getCloud;