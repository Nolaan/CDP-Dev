export class Issue {
  _id: string;
  issueId: number;
  sprintId: string;
  projectId: string;
  description: string;
  note: string;
  state: string;
  priority: string;
  difficulty: number;

constructor(projectId: string, id: string = null, description: string, note: string, state: string, priority: string, difficulty: number, sprintId: string = null) {
    if ( id !== null ) {
      this._id = id;
    }
    this.sprintId = sprintId;
    this.projectId = projectId;
    this.description = description;
    this.note = note;
    this.state = state;
    this.priority = priority;
    this.difficulty = difficulty;
  }
}
