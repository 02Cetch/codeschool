import React, {Component} from 'react';

import learning__items from '../../api/learning_items';

export default class Learning extends Component{
    constructor(props){
        super(props);

        this.state={
            status: 'OFFLINE', // status of user activity(TWITCH API)
            icon: 'http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F', // user icon(TWITCH API)
            game: 'nostream',
            viewers: 0, // number of views
            //result: ''  idk wht is ths :/
        };
    }
    fetchData(user) { // fetching data from Twitch API into the component
        var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
        var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";

        fetch(`${urlStreams}${user}`) // fetching data about streams
        .then(res => res.json())
        .then(data => {
            if (data.stream){
              this.setState({ 
              status: "ONLINE", 
              game: data.stream.game,
              viewers: data.stream.viewers
            });
        }else{
              this.setState({ status: "OFFLINE" });
            }
        })
        fetch(`${urlUsers}${user}`) // fetching data about user account
        .then(res => res.json())
        .then(data => {
          if(data.error)
            return data;
          else
             this.setState({ 
                icon: data.logo,
                name: data.name
            });
        });
             
      }// end fetchData
    componentDidMount(){
        this.fetchData(this.props.twitchOperatorName);
     }
    render(){
        return(
            <main id="to">
                <section className="s-learning">
                    <div className="container">
                        <div className="row">
                            {
                                learning__items.map(item=>
                                    <div className="col-md-6" key={item.id}>
                                        <div className="learning__item">
                                            <i className={`fa fa-${item.icon}`} style={{color: `#${this.props.bgColor}`}}></i>
                                            <h3 className="h3">{item.title}</h3>
                                            <p className="descr">{item.descr}</p>
                                        </div> 
                                </div> 
                                )
                            }        
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="twitch__state">
                                    <img className="twitch_img" src={this.state.icon} alt={this.state.name}/>
                                    <div className="title">
                                        <a target="_blank" rel="noopener noreferrer" href={`https://www.twitch.tv/${this.props.twitchOperatorName}`} className="stream_name">{this.props.twitchOperatorName}</a>
                                        <h3 className="stream_title">#{this.state.game}</h3>
                                        <h3 className="stream_views"><i className="fa fa-user" title="Online Users"></i>{this.state.viewers}</h3>
                                        <h4 className={`status-${this.state.status === 'ONLINE' ? 'online' : 'offline'}`}>{this.state.status}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}