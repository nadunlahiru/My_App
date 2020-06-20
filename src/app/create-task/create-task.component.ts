import {Component, OnInit} from '@angular/core';
import {TaskDto} from "../core/dto/TaskDto";
import {getTime} from "date-fns";
import {MyappService} from "../core/services/myapp.service";


@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

    task: TaskDto = new TaskDto();


    constructor(private myappService: MyappService) {
    }

    ngOnInit() {
    }

    addTask(task) {

        this.myappService.createTask(task).subscribe(data => {
            console.log(data);
        });


    }
}
