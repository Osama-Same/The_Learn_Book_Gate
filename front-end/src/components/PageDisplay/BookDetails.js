import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
export function BookDetails(props) {
  return (
    <div>
      <Dialog open={props.openBookDetails}>
        <DialogContent>
          <DialogContentText
            sx={{ marginBottom: "5%", color: "black", textAlign: "center" }}
          >
            Book Details
          </DialogContentText>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              marginBottom: "5%",
              textAlign: "end",
            }}
          >
            <img
              className="pt-3 pb-3"
              src={props.book.book_cover}
              alt="book_cover"
              width={200}
              height={220}
            />
            <Typography variant="body1" marginBottom={3}>
              عنوان الكتاب : {props.book.book_title}
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              {" "}
              تأليف : {props.book.book_authors}{" "}
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              {" "}
              الناشر : {props.book.publisher_name}{" "}
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              {" "}
              التاريخ الناشر : {props.book.year_publication}{" "}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => {
              props.setOpenBookDetails(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
