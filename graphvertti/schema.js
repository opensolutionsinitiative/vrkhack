import { buildSchema } from 'graphql'
export default buildSchema(`
"""
GRAPHVERTTI
"""
type Query {
    "Find a person with natinonal id."
    PersonByNationalID(Henkilotunnus: String!, SoSoNimi: String!, Loppukayttaja: String!): VTJHenkiloVastaussanoma,
}

"""
Type for VTJ Response
"""
type VTJHenkiloVastaussanoma {
    Asiakasinfo: Asiakasinfo,
    Hakuperusteet: Hakuperusteet,
    Henkilo: Henkilo
}

"""
Type for Asiakasinfo.
"""
type Asiakasinfo {
    InfoS: Date,
    InfoR: Date,
    InfoE: Date
}

"""
Type for Hakuperusteet.
"""
type Hakuperusteet {
    Henkilotunnus: String
}

"""
Type for Henkilo.
"""
type Henkilo {
    Henkilotunnus: String,
    NykyinenSukunimi: NykyinenSukunimi,
    NykyisetEtunimet: NykyisetEtunimet,
    Kotikunta: Kotikunta,
    VakinainenKotimainenLahiosoite: VakinainenKotimainenLahiosoite,
    VakinainenUlkomainenLahiosoite: VakinainenUlkomainenLahiosoite,
    Aidinkieli: Aidinkieli,
    Kuolintiedot: Kuolintiedot
}

"""
Type for NykyinenSukunimi.
"""
type NykyinenSukunimi {
    Sukunimi: String
}

"""
Type for NykyisetEtunimet.
"""
type NykyisetEtunimet {
    Etunimet: String
}

"""
Type for Kotikunta.
"""
type Kotikunta {
    Kuntanumero: Float,
    KuntaS: String,
    KuntaR: String,
    KuntasuhdeAlkupvm: Date
}

"""
Type for VakinainenKotimainenLahiosoite.
"""
type VakinainenKotimainenLahiosoite {
    LahiosoiteS: String,
    LahiosoiteR: String,
    Postinumero: Float,
    PostitoimipaikkaS: String,
    PostitoimipaikkaR: String,
    AsuminenAlkupvm: Date,
    AsuminenLoppupvm: Date
}

"""
Type for VakinainenKotimainenLahiosoite.
"""
type VakinainenUlkomainenLahiosoite {
    UlkomainenLahiosoite: String,
    UlkomainenPaikkakuntaJaValtioS: String,
    UlkomainenPaikkakuntaJaValtioR: String,
    UlkomainenPaikkakuntaJaValtioSelvakielinen: String,
    Valtiokoodi3: Float,
    AsuminenAlkupvm: Date,
    AsuminenLoppupvm: Date
}

"""
Type for Aidinkieli.
"""
type Aidinkieli {
    AidinkieliTietokoodi: Float
}

"""
Type for Kuolintiedot.
"""
type Kuolintiedot {
    Kuolinpvm: Date
}

"""
Custom type for dates
"""
scalar Date
`)