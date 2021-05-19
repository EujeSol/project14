import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
 
  @Input() note: Note;

  @Output() deleteNote = new EventEmitter<number>();
  @Output() changeEditStatus = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  onDeleteNote(id: number)
  {
    this.deleteNote.emit(id);
  }

  onChangeEditStatus(id: number)
  {
    this.changeEditStatus.emit(id);
  }
}
