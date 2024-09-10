import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    private _id: number;

    @Column({ name: 'estado'})
    private estado: Boolean;

    // Getters
    get id(): number {
        return this._id;
    }

    get Estado(): Boolean {
        return this.estado;
    }

    // Setters
    set id(id: number) {
        this._id = id;
    }

    set Estado(estado: boolean) {
        this.estado = estado;
    }
}