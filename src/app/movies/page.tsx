"use client";
import useSWR from "swr";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactPaginate from "react-paginate";
const Movies = () => {
  const [movie, setMovie] = useState<null>(null);
  const [showModalWatchMovie, setShowModalWatchMovie] =
    useState<boolean>(false);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://ophim1.com/danh-sach/phim-moi-cap-nhat",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log("data movie", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>List Movie</h1>
      <Container fluid>
        <Row>
          {data.items?.map((item: any) => {
            return (
              <Col xs={6} md={3} key={item.id} className="mb-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.slug}</Card.Text>

                    <Button
                      variant="primary"
                      onClick={() => {
                        setMovie(item);
                        setShowModalWatchMovie(true);
                      }}
                    >
                      Watch Movie
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Movies;
