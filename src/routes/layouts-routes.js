import ProjectsPage from '../pages/ProjectsPage';
import JobsPage from '../pages/JobsPage';
import TasksPage from '../pages/TasksPage';

export const routes = [
    // Projects
    { path: `/projects`, Component: <ProjectsPage /> },
    // Jobs
    { path: `/jobs`, Component: <JobsPage /> },
    // Tasks
    { path: `/tasks`, Component: <TasksPage /> }
];
