import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";

const canvas = document.querySelector('canvas');
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const createScene = () => {
  new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
  MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

  const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
}

window.addEventListener("resize", () => {
  engine.resize();
});

createScene();
engine.runRenderLoop(() => {
    scene.render();
});