import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'name':'LONDON','description':'London, city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre.'
    ,'images':'../../assets/images/des-2.jpg'},
    {'name':'MALDIVES','description':'The Maldives is the most celebrated group of islands in the Indian Ocean and perhaps the world over. The stunning beauty of its turquoise lagoons and pristine beaches is simply unrivalled. The Maldives islands are one of the few places on earth that everyone hopes to experience in their lifetime.','images':'../../assets/images/mal.webp'},
    {'name':'FRANCE','description':'France, officially French Republic, French France or République Française, country of northwestern Europe. Historically and culturally among the most important nations in the Western world, France has also played a highly significant role in international affairs, with former colonies in every corner of the globe.','images':'../../assets/images/des-1.jpg'},
    {'name':'AUSTRALIA','description':'Sydney, city, capital of the state of New South Wales, Australia. Located on Australia’s southeastern coast, Sydney is the country’s largest city and, with its magnificent harbour and strategic position, is one of the most important ports in the South Pacific. ','images':'../../assets/images/sydn.jpg'},
    {'name':'DUBAI','description':'Dubai, also spelled Dubayy, city and capital of the emirate of Dubai, one of the wealthiest of the seven emirates that constitute the federation of the United Arab Emirates, which was created in 1971 following independence from Great Britain. There are several theories about the origin of the name Dubai. ','images':'../../assets/images/des-3.jpg'},
    {'name':'BALI','description':'Province of Indonesia, Bali is on every travel enthusiast’s list. With an abundance gift of nature, Bali is known for its alluring arts which includes traditional and modern dance forms, its splendid sculptures, its flashy paintings, excellent leather, beautiful metalworking and amazing music. It has few smaller but outstanding islands like Nusa Penida, ','images':'../../assets/images/bali.jpg'},
  {'name':'CHINA','description':'China is surrounded by a series of age-old fortifications that were built to protect its borders. These were used as protections by the Imperial Chinese states to safeguard themselves from several nomadic groups that were primarily based in Eurasian Steppe.These walls were built in the 7th century and are top among the tourist places in Beijing.','images':'../../assets/images/china.jpg'},
  {'name':'MALAYSIA','description':'Petronas Twin Towers, pair of skyscraper office buildings in Kuala Lumpur, Malaysia, that are among the world’s tallest buildings. The Twin Towers, built to house the headquarters of Petronas, the national petroleum company of Malaysia, were designed by the Argentine-born American architect Cesar Pelli; they were completed in 1998.','images':'../../assets/images/twin.jpg'}
  ]
}
