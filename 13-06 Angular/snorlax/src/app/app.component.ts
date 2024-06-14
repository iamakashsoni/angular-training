import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'snorlax';
  displayPopup: boolean = false;
  submitted: boolean = false;

  formData: {
    name: string;
    desgination: string;
    address: string;
    mobileNumber: string;
    email: string;
    skills: string[];
    tools: string[];
    interests: string;
    languages: string;
    profile: string;
    experience: any;
    education: any;
  } = {
    name: '',
    desgination: '',
    address: '',
    mobileNumber: '',
    email: '',
    skills: [],
    tools: [],
    interests: '',
    languages: '',
    profile: '',
    experience: {
      companyName: '',
      desgination: '',
      from: '',
      to: '',
      description: '',
    },
    education: {
      instituteName: '',
      course: '',
      from: '',
      to: '',
      description: '',
    },
  };
  skillsList = [
    { id: 1, name: 'Programming', selected: false },
    { id: 2, name: 'Artificial Intelligence', selected: false },
    { id: 3, name: 'Data Analysis', selected: false },
    { id: 4, name: 'Machine Learning', selected: false },
    { id: 5, name: 'Cybersecurity', selected: false },
    { id: 6, name: 'Web Development', selected: false },
    { id: 7, name: 'Cloud Computing', selected: false },
    { id: 8, name: 'Software Testing', selected: false },
    { id: 9, name: 'Robotics', selected: false },
    { id: 10, name: 'Blockchain Technology', selected: false },
    { id: 11, name: 'Mobile App Development', selected: false },
  ];
  updateSkills() {
    this.formData.skills = this.skillsList
      .filter((skill) => skill.selected)
      .map((skill) => skill.name);
  }

  toolsList = [
    { id: 1, name: 'Jira', selected: false },
    { id: 2, name: 'Git and GitHub', selected: false },
    { id: 3, name: 'Kubernetes', selected: false },
    { id: 4, name: 'Eclipse', selected: false },
    { id: 5, name: 'Microsoft Azure Services', selected: false },
    { id: 6, name: 'Docker', selected: false },
    { id: 7, name: 'Postman', selected: false },
    { id: 8, name: 'Selenium', selected: false },
    { id: 9, name: '.Net', selected: false },
    { id: 10, name: 'SQL Server', selected: false },
    { id: 11, name: 'Flutter', selected: false },
  ];
  updateTools() {
    this.formData.tools = this.toolsList
      .filter((tool) => tool.selected)
      .map((tool) => tool.name);
  }

  openPopup() {
    this.displayPopup = true;
  }
  closePopup() {
    this.displayPopup = false;
  }
  onSubmit() {
    debugger;
    this.submitted = true;
    console.log(this.formData);
    this.displayPopup = false;
  }
}
