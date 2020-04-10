import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;

  userName:String;
  name:String;
  biography:String;

  msaapPlaylist: Track[] = [
    {
      title: 'SoundHelix Song 1',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      title: 'SoundHelix Song 2',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      title: 'SoundHelix Song 3',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      title: 'SoundHelix Song 4',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
      title: 'SoundHelix Song 5',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
    },
    {
      title: 'SoundHelix Song 6',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
    },
    {
      title: 'SoundHelix Song 7',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
    },
    {
      title: 'SoundHelix Song 8',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    },
    {
      title: 'SoundHelix Song 9',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
    },
    {
      title: 'SoundHelix Song 10',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get("userName")
    this.name = this.route.snapshot.paramMap.get("name")
    this.biography = this.route.snapshot.paramMap.get("biography")
  }

}
