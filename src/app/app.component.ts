import { Component, OnInit } from '@angular/core';
import { HttpNotService } from './shared/sevices/http-not.service';
import { Note} from './shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'LR11';

  constructor(
    private httpNoteService: HttpNotService
    ) {  }
  
    ngOnInit()
    {
      this.getData();
    }

  notes: Note[];



  onChangeEditStatus(id: number)
  {
    let index = this.notes.findIndex( (note) => note.id === id);
    // console.log(this.notes[index])
   this.notes[index].editStatus = true; 
  }

  async getData()
  {
    try 
    {
      this.notes = await this.httpNoteService.getNotes();
      this.httpNoteService.notesLength = await this.notes.length;

    }
    catch(err)
    {
      console.log(err);
    }
  }

  async onDeleteNote(id: number) 
  {
    try 
    {
      let index = this.notes.findIndex( (note) => note.id === id);
      if(index !== -1)
      this.httpNoteService.deleteNote(id);
    }
    catch(err)
    {
      console.log(err);
    }
    finally 
    {
      this.getData();
    }
  }
  
  async onAddNote(event: Note)
  {
    try 
    {
      await this.httpNoteService.postNote(event);
    }
    catch(err)
    {
      console.log(err);
    }
    finally 
    {
      this.getData();
    }
  }

  
  async onEdNote(event: Note)
  {
    try 
    {
      await this.onDeleteNote(event.id);

      await this.onAddNote(event);
    }
    catch(err)
    {
      console.log(err);
    }
    finally 
    {
      this.getData();
    }
  }
}


