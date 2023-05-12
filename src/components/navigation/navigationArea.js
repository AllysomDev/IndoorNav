import { MeshStandardMaterial, Vector3, PlaneGeometry, TextureLoader, MeshBasicMaterial, Mesh, MathUtils, Group, BoxGeometry } from "three";
import CasualFlapMapImageUrl from "/CasualFlatMap.png";

function setupNavigationAreaGeometry() {
    // create occluder material
    const occluderMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
    occluderMaterial.colorWrite = false;

    // create room map
    const navigationArea = new Group();
    navigationArea.add(createWallElement(new Vector3(-4.95, 1, 0), new Vector3(0, 0, 0), new Vector3(0, 3.5, 6.5), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(4.95, 1, 0), new Vector3(0, 0, 0), new Vector3(0, 3.5, 6.5), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(0, 1, 3.3), new Vector3(0, 0, 0), new Vector3(9.95, 3.5, 0), occluderMaterial));
    navigationArea.add(createWallElement(new Vector3(0, 1, -3.3),  new Vector3(0, 0, 0), new Vector3(9.95, 3.5, 0), occluderMaterial));




    // create floor
    const floorGeometry = new PlaneGeometry(9.95, 6.5);
    const floorTexture = new TextureLoader().load(CasualFlapMapImageUrl);
    const floorMaterial = new MeshBasicMaterial({ map: floorTexture });
    const floorPlaneMesh = new Mesh(floorGeometry, floorMaterial);
    floorPlaneMesh.rotateX(MathUtils.degToRad(270));
    floorPlaneMesh.renderOrder = 3;
    navigationArea.add(floorPlaneMesh);

    // navigation area parent for easier placement
    const navigationAreaParent = new Group();
    navigationAreaParent.add(navigationArea);

    return navigationAreaParent;
}

function createWallElement(position, rotation, scale, occluderMaterial) {
    const occluderGeometry = new BoxGeometry(scale.x, scale.y, scale.z);
    const occluderMesh = new Mesh(occluderGeometry, occluderMaterial);
    occluderMesh.position.set(position.x, position.y, position.z);
    occluderMesh.renderOrder = 2;

    return occluderMesh;
}

export { setupNavigationAreaGeometry };
