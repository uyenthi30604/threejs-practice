import { Mesh } from "three"

export default class Shape {
    constructor({ geometry, material, parentMesh, position, speed = 0.001, offsetSpeed =0}) {
        this.mesh = new Mesh(geometry, material)
        this.mesh.position.copy(position)
        parentMesh.add(this.mesh);

        this.speed = speed
        this.offsetSpeed = offsetSpeed
    }

    render(time) {
        this.mesh.position.y = Math.sin(time * this.speed + this.offsetSpeed);

        this.mesh.rotation.y += 0.01
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.z += 0.01
    }
}