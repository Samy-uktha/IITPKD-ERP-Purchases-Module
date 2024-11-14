export interface Project {
	name: string;
	category: string;
	id: string;
	grant: string;
	duration: string;
	budget: number;
	description: string;
	equipments : Equipment[];
	document : Document[];
	status : ProjectStatus;
  }


  export enum ProjectStatus{
    PENDING = "Pending",
    APPROVED = "Approved",
    REJECTED = "Rejected"
}
export interface Equipment {
	name: string;
	specs: string;
	quantity: number;
	justification: string;
	// fileURL: string
	file : Document;
}

export interface Document {
	documentName: string;
	documentURL: string;
}


