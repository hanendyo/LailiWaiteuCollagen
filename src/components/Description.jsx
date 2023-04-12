import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Container>
      <Wrapper>
        <ContentVideoWrapper>
          <iframe
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            title="waiteuYoutubeVid"
            height="600"
            width="800"
            allowfullscreen={true}
            class="mbr-embedded-video"
            frameborder=""
            src="https://www.youtube.com/embed/JekvrpSfajs?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0"
          ></iframe>
        </ContentVideoWrapper>
        {/* 1 */}
        <ContentTitle>Apa itu WAITEU High Beauty Collagen Drink?</ContentTitle>
        <ContentDesc>
          Laili Waiteu Collagen adalah minuman kecantikan untuk merawat tubuh
          dan kulit diformulasikan dengan Kolagen Peptipe ikan dari korea dan L
          Glutation Grade A sebagai komposisi utama. Kadar Kolagen, Glutation,
          Vitamin C dalam 1 box disesuaikan dengan 3x Injeksi pencerah dengan
          komposisi sebagai berikut:
        </ContentDesc>
        <ContentExplain>
          <span>
            1 kali Injeksi pencerah = 1 vial glutation, 1000mg Vit C, 1000 mg
            Kolagen*
          </span>
          <br />
          <br />
          <span>
            1 Box 150 gram terdiri dari 3 vial glutation, 30.000mg Vit C,
            30.000mg Kolagen (dengan persentasi oral maksimal 40% terserap,
            walau 40% kadarnya lebih tinggi daripada suntik putih dan jauh lebih
            aman dan menyehatkan)*
          </span>
          <br />
          <br />
          *Menurut jurnal ilmiah, wanita yang mengkonsumsi 2.5-5gram kolagen
          peptipe ikan selama 8 minggu merasa kulitnya semakin lembab, lembut,
          dan terawat secara significant
        </ContentExplain>
        <ContentDesc>
          Jika anda ingin mendapatkan kulit sehat terawat anda dapat mengikuti
          fase pencerahan kulit sebagai berikut:
        </ContentDesc>
        <ContentExplain>
          <span>• Bulan 1-3, 1 minggu sekali =12x suntik (fase 1)</span>
          <br />
          <br />
          <span>• Bulan 3-6, 2 minggu sekali= 6x suntik (fase 2)</span>
          <br />
          <br />
          <span>
            • Bulan 6-12 dan seterusnya adalah fase pemeliharaan, diagendakan
            2-4 minggu sekali=6-12x suntik (fase 3)
          </span>
        </ContentExplain>
        {/* 2 */}
        <br />
        <ContentTitle>
          Dengan demikian WAITEU yang Anda butuhkan untuk 3 fase sebagai
          berikut:
        </ContentTitle>
        <ContentPhase>
          <ContentImageWrapper>
            <ContentImage src={require("../assets/images/fase_1.png")} />
            <ContentImageExplain>
              Anda membutuhkan 4 box WAITEU
            </ContentImageExplain>
          </ContentImageWrapper>
          <ContentImageWrapper>
            <ContentImage src={require("../assets/images/fase_2.png")} />
            <ContentImageExplain>
              Anda membutuhkan 2 box WAITEU
            </ContentImageExplain>
          </ContentImageWrapper>
          <ContentImageWrapper>
            <ContentImage src={require("../assets/images/fase_3.png")} />
            <ContentImageExplain>
              Anda membutuhkan 2-4 box WAITEU
            </ContentImageExplain>
          </ContentImageWrapper>
        </ContentPhase>
        {/* 3 */}
        <br />
        <ContentTitle>
          Untuk hasil yang maksimal, anda perlu mengkonsumsi WAITEU COLLAGEN
          dengan aturan sebagai berikut:
        </ContentTitle>
        <ContentPhase>
          <ContentImageWrapper>
            <ContentImageExplain>KULIT PUTIH</ContentImageExplain>
            <ContentImage src={require("../assets/images/kulit_putih.png")} />
            <ContentImageExplain>
              Fungsi Memelihara 8g/seduh, 2x/hari 1 box = 9 hari
            </ContentImageExplain>
          </ContentImageWrapper>
          <ContentImageWrapper>
            <ContentImageExplain>KULIT KUSAM</ContentImageExplain>
            <ContentImage src={require("../assets/images/kulit_kusam.png")} />
            <ContentImageExplain>
              Fungsi Pencerah 10g/seduh, 2x/hari 1 box = 7 hari
            </ContentImageExplain>
          </ContentImageWrapper>
          <ContentImageWrapper>
            <ContentImageExplain>KULIT GELAP</ContentImageExplain>
            <ContentImage src={require("../assets/images/kulit_gelap.png")} />
            <ContentImageExplain>
              15g/seduh, 2x/hari 1 box = 5 hari
            </ContentImageExplain>
          </ContentImageWrapper>
          <ContentImageWrapper>
            <ContentImageExplain>KULIT BERJERAWAT</ContentImageExplain>
            <ContentImage
              src={require("../assets/images/kulit_berjerawat.png")}
            />
            <ContentImageExplain>
              15g/seduh, 3x/hari 1 box = 3 hari
            </ContentImageExplain>
          </ContentImageWrapper>
        </ContentPhase>
        <br />
        <ContentTitle>
          Mulailah merawat kulit dan investasi jangka panjang dengan kecantikan
          yang terpancar dengan kulit lebih muda dan usia tidak lagi menjadi
          penghalang kecantikan anda hanya dengan 10 box LAILI WAITEU COLLAGEN.
        </ContentTitle>
        <br />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  letter-spacing: 1px;
  width: 100%;
`;

const ContentVideoWrapper = styled.div`
  text-align: center;
  background-color: rgba(255, 152, 153, 0.1);
  padding: 50px 50px;
  margin-bottom: 50px;
`;
const ContentImageExplain = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: 600;
  margin: 15px 0;
`;
const ContentImage = styled.img`
  max-height: 250px;
  max-width: 250px;
  object-fit: cover;
`;

const ContentImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;
const ContentPhase = styled.div`
  display: flex;
  flex-wrap: wrap;
}
`;

const ContentTitle = styled.p`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin: 0px 0px 20px 0;
  text-align: center;
  text-justify: inter-word;
  background-color: rgba(255, 152, 153, 0.7);
  padding: 5px;
`;
const ContentDesc = styled.p`
  font-size: 22px;
  margin: 0px 0px 20px 0;
  font-weight: 500;
  text-align: justify;
  text-justify: inter-word;
  justify-content: center;
`;
const ContentExplain = styled.p`
  font-size: 22px;
  margin: 0px 0px 20px 0;
  color: rgb(255, 152, 153);
  font-weight: 600;
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 152, 153, 0.1);
  max-width: 120vh;
  align-self: center;
`;

export default Description;
