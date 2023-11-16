import { type entities as MkEntities } from "misskey-js";
import type { Folder } from "./Folder";
import type { MisskeyApi } from "./MisskeyApi";

export class DriveFile {
	public constructor(
		private api: MisskeyApi,
		public id: MkEntities.DriveFile["id"],
		public createDate: MkEntities.DriveFile["createdAt"],
		public type: MkEntities.DriveFile["type"],
		public url: MkEntities.DriveFile["url"],
		public comment: MkEntities.DriveFile["comment"],
		public isSensitive: MkEntities.DriveFile["isSensitive"],
		public location: Folder
	) { }

	public async delete() {
		
	}
};
