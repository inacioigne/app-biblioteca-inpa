import { Source } from "@/app/api/search/types"
import { Box, Container, Divider, Grid, Icon, IconButton, Typography } from "@mui/material"
import Image from 'next/image'
import { FaMapMarkedAlt } from "react-icons/fa"
import MetadataIcon from "./metadataIcon"
import { FcAnswers, FcCalendar, FcDepartment } from "react-icons/fc"
import language from "./language.json"
import { IoLanguage } from "react-icons/io5"
import TableExs from "./tableExs"
import Subjects from "./subjects"
import Autoria from "./autoria"
import { notFound } from "next/navigation"
import Serie from "./serie"
import Link from "next/link"

async function fetchItem(id: string): Promise<Source> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Erro ao buscar item')
  }

  return res.json()
}

export default async function ItemPage({ params }: { params: { id: string } }) {

  const { id } = await params

  try {
    const item = await fetchItem(id)
    // console.log("ITEM", item)
    return (
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 14, sm: 10 },
          pb: { xs: 8, sm: 12 },
        }}>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
            marginLeft: 2
          }}
        >
          <Grid
            size={{ xs: 12, md: 3 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',

              }}>
              <Box sx={{
                borderRadius: 1,
                overflow: 'hidden',
                width: 200,
                height: 300,
              }}>
                <Image
                  src={item.image}
                  alt=""
                  width={200}
                  height={300} />
              </Box>
              <Box sx={{
                mt: 1,
              }}>
                <Link 
                href={`https://catalogo.inpa.gov.br/cgi-bin/koha/opac-detail.pl?biblionumber=${item.biblionumber}`}
                target="_blank"
                >
                  <Image
                    src={"/logo/koha.png"}
                    alt=""
                    width={50}
                    height={10} />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 9 }}
          >
            <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {item.responsibility}
            </Typography>
            <Divider />
            <Autoria personal_name_added={item.personal_name_added} />
            <Serie serie={item.serie} />
            <Typography variant="subtitle2" sx={{
              mt: 2,
              fontWeight: 'bold'
            }}>
              Publicação:
            </Typography>
            <Divider />
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              mt: 2,
              gap: 3,
            }}>
              {/* publication_place */}
              <MetadataIcon
                metadata={item.publication_place}
                label={"Local"}
                icon={<FaMapMarkedAlt />} />
              {/* publisher */}
              <MetadataIcon
                metadata={item.publisher}
                label={"Editora"}
                icon={<FcDepartment />} />
              {/* publication_year */}
              <MetadataIcon
                metadata={item.publication_year}
                label={"Ano de Publicação"}
                icon={<FcCalendar />} />
            </Box>
            <Subjects subjects={item.subject} />

            <Typography variant="subtitle2" sx={{
              mt: 2,
              fontWeight: 'bold'
            }}>
              Outros detalhes:
            </Typography>
            <Divider />
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              mt: 2,
              gap: 3,
            }}>
              {/* Idioma */}
              <MetadataIcon
                metadata={language[item.language as keyof typeof language]}
                label={"Idioma"}
                icon={<IoLanguage />} />
              {/* Número de páginas */}
              <MetadataIcon
                metadata={item.extent}
                label={"Número de Páginas"}
                icon={<FcAnswers />} />
            </Box>
          </Grid>
          <Grid size={12}>
            <TableExs exemplares={item.exemplares} />
          </Grid>
        </Grid>
      </Container>
    )

  } catch (error) {
    // console.error("Erro ao buscar item:", error)
    // return <div>Erro ao buscar item</div>
    notFound()
  }


}
