import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Course } from './course';

export class CourseData implements InMemoryDbService {
  createDb() {
    let courses = [
        { id: 11, name: 'PHP Introduction', description: 'PHP is the best programming Language.', score: 3, students: [] },
        { id: 12, name: 'Python Language', description: 'No! Pythin is the real BEST!', score: 4, students: [] },
        { id: 13, name: 'Algorithm Design', description: 'This is taught by a university professor.', score: 5, students: [] },
        { id: 14, name: 'Senior Web Framework', description: 'The only Senior Course.', students: [] },
        { id: 15, name: 'Web Socket Analyse', description : 'I have not learned this one.', students: [] }
    ];
    return {courses};
  }
}
