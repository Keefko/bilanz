import {Component, ElementRef, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../interfaces/contact";
import {animate, state, style, transition, trigger} from "@angular/animations";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../public.component.css'],
})

export class ContactComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.contactService.get(1).subscribe(
      contact => {
        this.contact = contact
      }
    )

  }

  show(id: number) {
    const accordions = document.querySelectorAll('.panel')
    accordions.forEach(function (acc) {
      acc.classList.remove('display-block');
      acc.classList.add('display-none');
    })
    const accordion = document.querySelector('#item' + id);
    accordion.classList.remove('display-none');
    accordion.classList.add('display-block');
  }

  returnHtmlFromRichText(richText: Document) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
