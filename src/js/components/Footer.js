import React from 'react'
import { render } from 'react-dom'

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Footer = () => {
  return (
    <div className="pageFooter">
      <Card className="wrapper">
        <CardHeader title="Without Avatar" subtitle="Subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
          Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui
          mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    </div>
  )
}

export default Footer
