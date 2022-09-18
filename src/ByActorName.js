import React from 'react';
import Cards from './Cards';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getShowsByActorName } from './AxiosHelper';

function ByActorName({ data }) {
  const [showModal, setShowModal] = React.useState(false);
  const [shows, setShows] = React.useState([]);

  const onClose = () => {
    setShowModal(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const onClickShowMore = (id) => {
    setShowModal(true);
    getShowsByActorName(id)
      .then((res) => setShows(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {data?.length > 0 ? (
        <Grid direction='rows' container spacing={2}>
          {data?.map((actor) => (
            <Grid item xs={4}>
              <Cards
                on
                img={
                  actor?.person?.image != null &&
                  actor?.person?.image?.original != null
                    ? actor?.person?.image?.original
                    : 'https://www.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg'
                }
                name={actor?.person?.name}
                desc={actor?.person?.gender}
                onClickShowMore={() => onClickShowMore(actor.person.id)}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        'No Actor Found'
      )}
      <Modal
        open={showModal}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        style={{
          width: '90%',
          height: '100%',
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Shows
          </Typography>
          {shows?.length > 0 ? (
            <Grid direction='rows' container spacing={2}>
              {shows?.map((show) => (
                <Grid item xs={4}>
                  <Cards
                    img={
                      show?._embedded?.show?.image != null &&
                      show?._embedded?.show?.image?.original != null
                        ? show?._embedded?.show?.image?.original
                        : 'https://www.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg'
                    }
                    name={show?._embedded?.show?.name}
                    language={show?._embedded?.show?.language}
                    desc={show?._embedded?.show?.summary}
                    genres={show?._embedded?.show?.genres}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            'No shows'
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ByActorName;
