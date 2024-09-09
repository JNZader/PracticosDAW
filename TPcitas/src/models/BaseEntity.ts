import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    private _id: number;

    @CreateDateColumn()
    private createAt: Date;

    @UpdateDateColumn()
    private updateAt: Date;

    @Column()
    private estado: Boolean;

    // Getters
    get id(): number {
        return this._id;
    }

    get CreateAt(): Date {
        return this.createAt;
    }

    get UpdateAt(): Date {
        return this.updateAt;
    }

    get Estado(): Boolean {
        return this.estado;
    }

    // Setters
    set id(id: number) {
        this._id = id;
    }

    set CreateAt(createAt: Date) {
        this.createAt = createAt;
    }

    set UpdateAt(updateAt: Date) {
        this.updateAt = updateAt;
    }

    set Estado(estado: boolean) {
        this.estado = estado;
    }
}