import React from "react"
import "typeface-roboto"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Entrance from "../components/entrance"
import styles from "./../styles/index.module.scss"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Link } from "gatsby"
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

      <div className={styles.index}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Warning"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Link to="/about/">
              <Button onClick={handleClose} color="primary" autoFocus>
                Yes
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </Layout>
  )
}

export default IndexPage
