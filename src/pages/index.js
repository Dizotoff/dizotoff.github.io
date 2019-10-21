import React from "react"
import "typeface-roboto"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Entrance from "../components/entrance"
import "./../styles/index.module.scss"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

const IndexPage = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Entrance onClick={handleClickOpen} />
      {/* <Link to="/page-2/">W</Link> */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Warning"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              A very small percentage of people may experience a seizure when
              exposed to certain visual images, including flashing lights or
              visual patterns. Even people who have no history of seizures or
              epilepsy may have an undiagnosed condition that can cause these
              "photosensitive epileptic seizures" while visiting my website.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Layout>
  )
}

export default IndexPage
