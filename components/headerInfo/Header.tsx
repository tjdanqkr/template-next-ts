import Head from 'next/head';
interface titleInfo {
  titleName: string;
}
const TitleHeader = ({ titleName }: titleInfo) => {
  return (
    <Head>
      <title>{titleName}</title>
      <meta name="description" content="prod.sungmupark" />
    </Head>
  );
};

export default TitleHeader;
