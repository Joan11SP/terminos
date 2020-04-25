import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {

  form_termino:FormGroup
  link
  constructor(private form: FormBuilder) {
    this.form_termino = this.form.group({
      check:["",Validators.required]
    })
   }

  ngOnInit() {
  }

  verificar(){
    if(this.form_termino.invalid){
      console.log('no verifi')
      return false;
    }
    else{
      console.log('verifi')
      this.link='https://investigacionistl.now.sh'
      document.getElementById('aceptar').click()
    }
  }
}
