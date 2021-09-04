import { CardContent, Container, Grid, Input, Card, ButtonGroup, Button } from '@material-ui/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import TitleHeader from '../../components/headerInfo/Header';
import styles from '../../styles/login.module.scss';

const LoginComponent: NextPage = () => {
  console.log(styles);
  const titleMessage = '로그인을 해주세요';
  return (
    <div>
      <TitleHeader titleName={titleMessage}></TitleHeader>
      <main>
        <Container maxWidth="sm" fixed>
          <div className={styles.container}>
            <div className={styles.loginForm}>
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={1}>
                    <Grid item xs>
                      <Input placeholder="id"></Input>
                    </Grid>
                    <Grid item xs>
                      <Input placeholder="pw" type="password"></Input>
                    </Grid>
                    <Grid item xs>
                      <ButtonGroup fullWidth>
                        <Button>Login</Button>
                        <Button>Joined</Button>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default LoginComponent;
