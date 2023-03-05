import { Card, Typography, Checkbox, Chip } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export function RightDisplay(props) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <div className="text-end">
      <Typography variant="body1">تصفية النتائج</Typography>
      <div className="row pt-3 pb-3">
        <div className="col pt-3 pb-3 ">
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon color="info" />}
            defaultExpandIcon={<ChevronRightIcon color="info" />}
            sx={{ maxWidth: 600 }}
          >
            <Card
              sx={{
                mb: 3,
                mt: 6,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="1"
                label="المواضيع"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.booksSubject.map((e, i) => {
                  return (
                    <div key={i._id}>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div key={i._id}>
                            <span>{e.book_Subjects} (255)</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>
            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="12"
                label="نوع الوثيقة"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.books.map((e, i) => {
                  return (
                    <div key={i._id}>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div key={i}>
                            <span>{e.book_type}</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>
            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="13"
                label="الناشر"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.books.map((e,i) => {
                  return (
                    <div key={i._id}>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div>
                            <span>{e.publisher_name}</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>

            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="14"
                label=" تاريخ الناشر"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.books.map((e,i) => {
                  return (
                    <div key={i._id}>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div>
                            <span>{e.year_publication}</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>
            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="15"
                label=" المؤلف"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.books.map((e) => {
                  return (
                    <div>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div>
                            <span>{e.book_authors}</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>
            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="16"
                label="ISBN"
                sx={{ textAlign: "end", mb: 3 }}
              >
                <hr />
                {props.books.map((e,i) => {
                  return (
                    <div key={i._id}>
                      <TreeItem
                        nodeId={e._id}
                        label={
                          <div>
                            <span>{e.ISBN}</span>
                            <Checkbox />
                          </div>
                        }
                      ></TreeItem>
                    </div>
                  );
                })}
              </TreeItem>
            </Card>
            <Card
              sx={{
                mb: 3,
                mt: 5,
                pt: 2,
                backgroundColor: "#dbdfe3",
              }}
            >
              <TreeItem
                nodeId="17"
                label={
                  <div>
                    <Chip label="الوصف" onDelete={handleDelete} color="info" />
                    <span> الكلمات المفتاحية </span>
                  </div>
                }
                sx={{ textAlign: "end", mb: 3 }}
              ></TreeItem>
            </Card>
          </TreeView>
        </div>
      </div>
    </div>
  );
}
