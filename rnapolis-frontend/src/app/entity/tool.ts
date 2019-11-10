export class Tool {
  toolName: string;
  description: string;
  link: string;
  constructor(toolName: string, description: string, link: string) {
    this.toolName = toolName;
    this.description = description;
    this.link = link;
  }
}
