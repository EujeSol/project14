import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note} from 'src/app/shared/note.model';
import { HttpNotService } from 'src/app/shared/sevices/http-not.service';

@Component({
  selector: 'app-addformnote',
  templateUrl: './addformnote.component.html',
  styleUrls: ['./addformnote.component.css']
})
export class AddformnoteComponent implements OnInit {
 
  noteForm: FormGroup;
  @Output() addNote = new EventEmitter<Note>();

  constructor(private HttpNotService: HttpNotService) { }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required])
    })
  }

  onAddNote ()
  {
    let date = new Date;
    let newNote: Note = 
    {id: this.HttpNotService.notesLength + 1,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      name: this.noteForm.get('title').value,
      text: this.noteForm.get('text').value,
      editStatus: false };

    this.addNote.emit(newNote)

    
    this.noteForm.reset();
  }

}
