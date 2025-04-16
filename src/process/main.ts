import { Process } from "@nexus/nexus-module-builder"
import { session } from "electron";

// These is replaced to the ID specified in export-config.js during export. DO NOT MODIFY.
const MODULE_ID: string = "{EXPORTED_MODULE_ID}";
const MODULE_NAME: string = "{EXPORTED_MODULE_NAME}";
// ---------------------------------------------------

export default class SampleProcess extends Process {

    /**
     *  The constructor. Should not directly be called, 
     *      and should not contain logic relevant to the renderer.
     */
    public constructor() {
        super({
			moduleID: MODULE_ID,
			moduleName: MODULE_NAME,
			paths: {
				urlPath: "https://github.com/aarontburn/nexus-core/blob/main/docs/getting_started/Introduction.md#Nexus"
			},
            httpOptions: {
                userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.179 Safari/537.36`,
                partition: `persist:${MODULE_ID}`
            }
		});
    }

    public beforeWindowCreated(): void {

    }


}