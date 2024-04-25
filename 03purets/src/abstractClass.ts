abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void

    getReelTime(): number {
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const rahul1 = new Instagram("test", "test", 5);
rahul1.getReelTime();