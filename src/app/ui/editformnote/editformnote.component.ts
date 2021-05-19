import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { HttpNotService } from 'src/app/shared/sevices/http-not.service';

@Component({
  selector: 'app-editformnote',
  templateUrl: './editformnote.component.html',
  styleUrls: ['./editformnote.component.css']
})
export class EditformnoteComponent implements OnInit {

  constructor(private HttpNotService: HttpNotService) { }

  @Input() edNote: Note;
  @Output() editNote = new EventEmitter<Note>();

  noteForm: FormGroup;
  
  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required])
    })
  }

 onEditNote (id: number)
  {
    let date = new Date;

       this.editNote.emit(
        {id: id,
         date: date.toLocaleDateString(),
         time: date.toLocaleTimeString(),
         name: this.noteForm.get('title').value,
         text: this.noteForm.get('text').value,
         editStatus: false })
  }

}
