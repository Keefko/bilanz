import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../interfaces/contact";
import {FaqService} from "../../services/faq.service";
import {Faq} from "../../interfaces/faq";
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Router} from "@angular/router";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../secure.component.css']
})
export class ContactComponent implements OnInit {
  public editor = ClassicEditor;
  form: FormGroup;
  contact: Contact;
  faqs: Faq[] = [];
  formFaqUpdate: FormGroup;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService,
              private faqService: FaqService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'id': '',
      'img': ['', Validators.required],
      'title' : ['', Validators.required],
      'address' : ['', Validators.required],
      'phone' : ['', Validators.required],
      'mail' : ['', Validators.required],
      'bank' : ['', Validators.required],
      'info' : ['', Validators.required],
      'map' : ''
    })

    this.formFaqUpdate = this.formBuilder.group({
      'title' : ['', Validators.required],
      'text' : ['', Validators.required],
    })

    this.contactService.get(1).subscribe(
      contact => {
        this.contact = contact;
        this.setValues(contact);
      }
    )

    this.loadFaqData()
  }

  get f(){
    return this.form.controls;
  }

  get fu(){
    return this.formFaqUpdate.controls;
  }
  private setValues(contact: Contact) {
    this.f.title.setValue(contact.title)
    this.f.address.setValue(contact.address)
    this.f.bank.setValue(contact.bank)
    this.f.phone.setValue(contact.phone)
    this.f.mail.setValue(contact.mail)
    this.f.info.setValue(contact.info)
  }

  private loadFaqData() {
    this.faqService.all().subscribe(
        faqs => {
          this.faqs = faqs;
        }
    )
  }

  submit(): void {
    const data = {id: this.contact.id, title: this.f.title.value,
      img: this.f.img.value,phone: this.f.phone.value, mail: this.f.mail.value,
      address: this.f.address.value, bank: this.f.bank.value, info: this.f.info.value,
      map: this.f.map.value};

    this.contactService.update(data, this.contact.id).subscribe(
      contact => {
          this.contact = contact;
        this.router.navigateByUrl('/administracia/kontakt');
        }
    )
  }

  deleteFaq(id: number) {

  }

  show(id: number) {
    const lists = document.querySelectorAll('.panel')
    lists.forEach(function (acc){
      acc.classList.remove('display-block');
      acc.classList.add('display-none');
    })
    const list = document.querySelector('#item' + id);
    list.classList.remove('display-none');
    list.classList.add('display-block');
  }

  update(): void {

  }
}
