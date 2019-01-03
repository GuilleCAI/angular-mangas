export class Pendiente {
    actual: number;
    total: number;

    toString() {
        var builder = "";
        if (this.actual != null) {
            builder = builder + "actual=";
            builder = builder + this.actual;
            builder = builder + ", ";
        }
        if (this.total != null) {
            builder = builder + "total=";
            builder = builder + this.total;
            builder = builder + ", ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 2);
        }
        return "Pendiente [" + builder + "]";
    }
}