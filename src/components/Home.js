import React, { Component } from 'react'
//note: for Recent Uploads section, remove bottom-margin

class Home extends Component {

  render() {
    return (
	   <div className="row z-depth-4">
        <div className="col s12 l4">
        	<h4 className="center">Recent Uploads</h4>
        	<hr/>
        	<div className="row">
                <div className="col s12 center">
                    <h5>Guess Who Mario Version! <span>by Thomas T.</span></h5>
                    <p>Students will enjoy and master the grammar with this! <span>Level: Year 1</span></p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <h5>Guess Who Gundam Version! <span>by Palmer C.</span></h5>
                    <p>Students will enjoy and master the grammar with this! <span>Level: Year 1</span></p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <h5>Guess Who Sailor Moon Version! <span>by Walt S.</span></h5>
                    <p>Students will enjoy and master the grammar with this! <span>Level: Year 1</span></p>
                </div>
            </div>
        	<div className="row">
        		<div className="col s12 center">
        			<h5>File Upload</h5>
                    <p>People helping people. It's powerful stuff. Help contribute to NihonALT:</p>
        			<p><a href="#!"><i className="material-icons md-span md-48">file_upload</i></a></p>
        		</div>
        	</div>
        </div>
        <div className="col s12 l8">
        	<h4 className="center">Otsukaresama News / Articles</h4>
        	<hr/>
        	<div className="row">
                <div className="col s12">
                    <h5>My Transformation from ALT to Super ALT <span>by Nate G.</span></h5>
                    <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle. Sed erizzle. Fusce izzle dolor dapibus turpizzle tempizzle rizzle. Maurizzle pellentesque nibh dawg turpis.<a href="#!"> Continue reading...</a></p>
                    <hr/>
                </div>
                <div className="col s12">
                    <h5>Tips for New ALTs From Grizzled Veterans <span>by Rachel W.</span></h5>
                    <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle. Sed erizzle. Fusce izzle dolor dapibus turpizzle tempizzle rizzle. Maurizzle pellentesque nibh dawg turpis.<a href="#!"> Continue reading...</a></p>
                    <hr/>
                </div>
        		<div className="col s12">
                    <h5>Saving Money in Japan - Slash Your Phone Bill <span>by Karl G.</span></h5>
        			<p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle. Sed erizzle. Fusce izzle dolor dapibus turpizzle tempizzle rizzle. Maurizzle pellentesque nibh dawg turpis.<a href="#!"> Continue reading...</a></p>
                    <hr/>
        		</div>
                <div className="col s12">
                    <h5>Hello, World - NihonALT Has Landed <span>by Terence M.</span></h5>
                    <p>Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle. Sed erizzle. Fusce izzle dolor dapibus turpizzle tempizzle rizzle. Maurizzle pellentesque nibh dawg turpis.<a href="#!"> Continue reading...</a></p>
                    <hr/>
                </div>
        	</div>
        </div>
    </div>
    )
  }
}

export default Home