import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const competitors = [
  {
    rank: 1,
    name: "Naranjo Roses",
    country: "Ecuador",
    location: "Cotopaxi, Ecuador",
    founded: "N/A",
    farmSize: "50 hectares",
    varieties: "91+",
    volume: "Undisclosed",
    pricing: "$1.19–$1.50/stem",
    positioning: "Premium",
    products: ["Fresh cut roses", "Tinted roses", "Preserved roses"],
    exports: "61+ countries",
    certifications: ["Rainforest Alliance", "FlorEcuador"],
    keyVarieties: [
      "Forever Young",
      "Freedom",
      "Gold Strike",
      "Esperance",
      "Vendela",
      "Cool Water",
    ],
    strengths: [
      "Three distinct product lines (fresh, tinted, preserved)",
      "Strong global distribution to 61+ countries",
      "Competitive pricing below Rosaprima's premium tier",
    ],
    weaknesses: [
      "Fewer varieties (91 vs. 150+)",
      "Less brand cachet in luxury/wedding segment",
      "No garden rose or ranunculus offering",
    ],
    threatLevel: 85,
  },
  {
    rank: 2,
    name: "Alexandra Farms",
    country: "Colombia",
    location: "Andes Mountains, Bogota, Colombia",
    founded: "2005",
    farmSize: "50 acres of greenhouses",
    varieties: "~80",
    volume: "~16M stems/year",
    pricing: "$2.50–$5.00+/stem",
    positioning: "Premium-Luxury (Niche)",
    products: [
      "David Austin English Garden Roses",
      "Deluxe Garden Roses",
      "Princess Japanese Garden Roses",
      "Wabara Garden Roses",
      "Dahlias",
    ],
    exports: "USA, Canada, Europe, Japan",
    certifications: [],
    keyVarieties: [
      "David Austin collections",
      "Princess Miyuki",
      "Wabara varieties",
    ],
    strengths: [
      "World's largest garden rose grower — dominant niche",
      "Exclusive licensed collections (David Austin, Wabara)",
      "Strong wedding/event market positioning",
    ],
    weaknesses: [
      "Narrower product focus (garden roses only)",
      "Smaller volume (~16M vs. 100M+ stems)",
      "Colombia-based — Ecuador has altitude advantage for head size",
    ],
    threatLevel: 78,
  },
  {
    rank: 3,
    name: "Royal Flowers Group",
    country: "Ecuador",
    location: "Andean region, Ecuador",
    founded: "N/A",
    farmSize: "Large-scale (undisclosed)",
    varieties: "50+",
    volume: "Undisclosed",
    pricing: "$1.19–$1.29/stem",
    positioning: "Mid-Premium",
    products: ["Premium roses", "Bulk wholesale roses", "Lilies"],
    exports: "US, Europe, Russia",
    certifications: [],
    keyVarieties: [
      "Red Panther",
      "Atomic",
      "Confidential",
      "Explorer",
      "Freedom",
      "Pink Floyd",
    ],
    strengths: [
      "Diversified product line (roses + lilies)",
      "Strong bulk wholesale infrastructure",
      "Award-winning exclusive 'Red Panther' variety",
    ],
    weaknesses: [
      "Less premium brand positioning than Rosaprima",
      "Fewer total varieties",
      "Less brand recognition in luxury/designer segment",
    ],
    threatLevel: 65,
  },
  {
    rank: 4,
    name: "Rio Roses",
    country: "Ecuador / Colombia / Costa Rica",
    location: "Multi-country operations",
    founded: "N/A",
    farmSize: "Multiple farms across 3 countries",
    varieties: "Wide selection (undisclosed)",
    volume: "Undisclosed",
    pricing: "$1.00–$1.50/stem",
    positioning: "Mid-Premium",
    products: ["Premium roses with proprietary 'Breeders Cut' technique"],
    exports: "Global",
    certifications: [],
    keyVarieties: ["Trend-driven variety selection", "Breeders Cut exclusives"],
    strengths: [
      "Multi-country farming reduces climate risk",
      "Proprietary 'Breeders Cut' for fuller blooms",
      "Research-driven trend forecasting",
    ],
    weaknesses: [
      "Less focused brand identity across 3 countries",
      "Quality consistency harder to maintain",
      "More mid-market positioning",
    ],
    threatLevel: 55,
  },
  {
    rank: 5,
    name: "Native Blooms",
    country: "Ecuador",
    location: "Cotopaxi & Cayambe, Ecuador",
    founded: "1996",
    farmSize: "2 farms",
    varieties: "~100",
    volume: "Undisclosed",
    pricing: "$1.00–$1.50/stem",
    positioning: "Premium",
    products: [
      "Premium roses",
      "Spray roses",
      "Gypsophila",
      "Hypericum",
      "Summer flowers",
    ],
    exports: "Global wholesale",
    certifications: ["Eco-friendly packaging (95% recyclable)"],
    keyVarieties: ["100 hybrid tea varieties", "New Yellow"],
    strengths: [
      "Pioneer status — one of Ecuador's original farms (1996)",
      "Industry-lowest defect/quality claim rates",
      "Dual-farm strategy across best microclimates",
    ],
    weaknesses: [
      "Lower brand visibility than Rosaprima",
      "Smaller variety count (~100 vs. 150+)",
      "No preserved or tinted product lines",
    ],
    threatLevel: 50,
  },
];

const rosaprima = {
  name: "Rosaprima",
  location: "Guachala, Ecuador",
  founded: "~1997",
  volume: "100M+ stems/year",
  varieties: "150+",
  pricing: "$2.50–$5.00+/stem",
  positioning: "Ultra-Premium / Luxury",
  products: [
    "Premium roses (150+ varieties)",
    "Spray roses",
    "Ranunculus",
    "Floraprima wedding flowers",
  ],
};

function ThreatBadge({ level }: { level: number }) {
  if (level >= 75)
    return (
      <Badge variant="destructive" className="text-[0.6rem]">
        High Threat
      </Badge>
    );
  if (level >= 60)
    return (
      <Badge variant="outline" className="text-[0.6rem]">
        Moderate Threat
      </Badge>
    );
  return (
    <Badge variant="secondary" className="text-[0.6rem]">
      Lower Threat
    </Badge>
  );
}

function CompetitorCard({
  competitor,
}: {
  competitor: (typeof competitors)[0];
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            #{competitor.rank} {competitor.name}
          </CardTitle>
          <ThreatBadge level={competitor.threatLevel} />
        </div>
        <CardDescription>
          {competitor.location} &middot; Est. {competitor.founded} &middot;{" "}
          {competitor.positioning}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-muted-foreground">Varieties</p>
            <p className="font-medium">{competitor.varieties}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Volume</p>
            <p className="font-medium">{competitor.volume}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Pricing</p>
            <p className="font-medium">{competitor.pricing}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Farm Size</p>
            <p className="font-medium">{competitor.farmSize}</p>
          </div>
        </div>

        <Separator />

        <div>
          <p className="mb-2 font-medium">Products</p>
          <div className="flex flex-wrap gap-1.5">
            {competitor.products.map((p) => (
              <Badge key={p} variant="secondary">
                {p}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Key Varieties</p>
          <div className="flex flex-wrap gap-1.5">
            {competitor.keyVarieties.map((v) => (
              <Badge key={v} variant="outline">
                {v}
              </Badge>
            ))}
          </div>
        </div>

        {competitor.certifications.length > 0 && (
          <div>
            <p className="mb-2 font-medium">Certifications</p>
            <div className="flex flex-wrap gap-1.5">
              {competitor.certifications.map((c) => (
                <Badge key={c} variant="default">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 font-medium text-chart-1">Strengths</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {competitor.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium text-destructive">Weaknesses</p>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {competitor.weaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-muted-foreground">Competitive Threat Level</p>
            <p className="font-medium">{competitor.threatLevel}%</p>
          </div>
          <Progress value={competitor.threatLevel} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  return (
    <div className="mx-auto min-h-svh max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          Market Intelligence Report
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Rosaprima Competitive Analysis
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          South America Premium Rose Market &middot; March 2026
        </p>
      </header>

      {/* Benchmark Card */}
      <Card className="mb-8 border-primary/20 bg-primary/[0.03]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CardTitle className="text-lg">Rosaprima — Benchmark</CardTitle>
            <Badge>Market Leader</Badge>
          </div>
          <CardDescription>
            {rosaprima.location} &middot; Est. {rosaprima.founded} &middot;{" "}
            {rosaprima.positioning}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <p className="text-muted-foreground">Annual Volume</p>
              <p className="text-lg font-bold">{rosaprima.volume}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Varieties</p>
              <p className="text-lg font-bold">{rosaprima.varieties}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Wholesale Pricing</p>
              <p className="text-lg font-bold">{rosaprima.pricing}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Positioning</p>
              <p className="text-lg font-bold">{rosaprima.positioning}</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div>
            <p className="mb-2 font-medium">Product Lines</p>
            <div className="flex flex-wrap gap-1.5">
              {rosaprima.products.map((p) => (
                <Badge key={p} variant="secondary">
                  {p}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Profiles</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Comparison</TabsTrigger>
          <TabsTrigger value="takeaways">Key Takeaways</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape Summary</CardTitle>
              <CardDescription>
                Top 5 South American competitors ranked by competitive threat to
                Rosaprima
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Varieties</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Pricing</TableHead>
                    <TableHead>Positioning</TableHead>
                    <TableHead>Threat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitors.map((c) => (
                    <TableRow key={c.name}>
                      <TableCell className="font-medium">#{c.rank}</TableCell>
                      <TableCell className="font-medium">{c.name}</TableCell>
                      <TableCell>{c.country}</TableCell>
                      <TableCell>{c.varieties}</TableCell>
                      <TableCell>{c.volume}</TableCell>
                      <TableCell>{c.pricing}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{c.positioning}</Badge>
                      </TableCell>
                      <TableCell>
                        <ThreatBadge level={c.threatLevel} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>
                  Wholesale pricing estimated from distributor listings and
                  industry benchmarks. Actual pricing varies by variety, stem
                  length, season, and volume.
                </TableCaption>
              </Table>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card size="sm">
              <CardHeader>
                <CardDescription>Rosaprima Volume Lead</CardDescription>
                <CardTitle className="text-2xl">6x+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Larger than the nearest competitor with disclosed volume
                  (Alexandra Farms at ~16M stems)
                </p>
              </CardContent>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardDescription>Price Premium</CardDescription>
                <CardTitle className="text-2xl">2–4x</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rosaprima commands $2.50–$5.00+/stem vs. $1.00–$1.50 for
                  standard Ecuador wholesale
                </p>
              </CardContent>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardDescription>Variety Advantage</CardDescription>
                <CardTitle className="text-2xl">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most varieties of any single grower. Nearest competitor: Native
                  Blooms at ~100
                </p>
              </CardContent>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardDescription>Market Gap</CardDescription>
                <CardTitle className="text-2xl">Wedding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Alexandra Farms dominates garden roses for weddings —
                  Floraprima is Rosaprima&apos;s response
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Competitor Profiles Tab */}
        <TabsContent value="competitors" className="space-y-6">
          {competitors.map((c) => (
            <CompetitorCard key={c.name} competitor={c} />
          ))}
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wholesale Pricing Comparison</CardTitle>
              <CardDescription>
                Estimated per-stem wholesale pricing across all competitors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visual bars */}
              <div className="space-y-4">
                {[
                  {
                    name: "Rosaprima",
                    low: 2.5,
                    high: 5.0,
                    tier: "Ultra-Premium",
                  },
                  {
                    name: "Alexandra Farms",
                    low: 2.5,
                    high: 5.0,
                    tier: "Premium-Luxury",
                  },
                  {
                    name: "Naranjo Roses",
                    low: 1.19,
                    high: 1.5,
                    tier: "Premium",
                  },
                  {
                    name: "Royal Flowers",
                    low: 1.19,
                    high: 1.29,
                    tier: "Mid-Premium",
                  },
                  {
                    name: "Rio Roses",
                    low: 1.0,
                    high: 1.5,
                    tier: "Mid-Premium",
                  },
                  {
                    name: "Native Blooms",
                    low: 1.0,
                    high: 1.5,
                    tier: "Premium",
                  },
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="w-40 font-medium">{item.name}</p>
                        <Badge variant="outline" className="text-[0.6rem]">
                          {item.tier}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        ${item.low.toFixed(2)} – ${item.high.toFixed(2)}/stem
                      </p>
                    </div>
                    <div className="relative h-3 w-full overflow-hidden bg-muted">
                      <div
                        className="absolute top-0 h-full bg-chart-2"
                        style={{
                          left: `${(item.low / 6) * 100}%`,
                          width: `${((item.high - item.low) / 6) * 100}%`,
                          minWidth: "8px",
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between text-[0.6rem] text-muted-foreground">
                  <span>$0.00</span>
                  <span>$1.50</span>
                  <span>$3.00</span>
                  <span>$4.50</span>
                  <span>$6.00</span>
                </div>
              </div>

              <Separator />

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Est. Wholesale/Stem</TableHead>
                    <TableHead>Positioning</TableHead>
                    <TableHead>Annual Volume</TableHead>
                    <TableHead>Bulk Box (250 stems)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-primary/[0.03]">
                    <TableCell className="font-bold">Rosaprima</TableCell>
                    <TableCell className="font-medium">
                      $2.50–$5.00+
                    </TableCell>
                    <TableCell>
                      <Badge>Ultra-Premium</Badge>
                    </TableCell>
                    <TableCell>100M+ stems</TableCell>
                    <TableCell>$625–$1,250+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Alexandra Farms
                    </TableCell>
                    <TableCell>$2.50–$5.00+</TableCell>
                    <TableCell>
                      <Badge variant="outline">Premium-Luxury</Badge>
                    </TableCell>
                    <TableCell>~16M stems</TableCell>
                    <TableCell>$625–$1,250+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Naranjo Roses</TableCell>
                    <TableCell>$1.19–$1.50</TableCell>
                    <TableCell>
                      <Badge variant="outline">Premium</Badge>
                    </TableCell>
                    <TableCell>Undisclosed</TableCell>
                    <TableCell>$297–$375</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Royal Flowers
                    </TableCell>
                    <TableCell>$1.19–$1.29</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Mid-Premium</Badge>
                    </TableCell>
                    <TableCell>Undisclosed</TableCell>
                    <TableCell>$297–$322</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rio Roses</TableCell>
                    <TableCell>$1.00–$1.50</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Mid-Premium</Badge>
                    </TableCell>
                    <TableCell>Undisclosed</TableCell>
                    <TableCell>$250–$375</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Native Blooms
                    </TableCell>
                    <TableCell>$1.00–$1.50</TableCell>
                    <TableCell>
                      <Badge variant="outline">Premium</Badge>
                    </TableCell>
                    <TableCell>Undisclosed</TableCell>
                    <TableCell>$250–$375</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Pricing estimated from distributor listings and industry
                  benchmarks. Actual pricing varies by variety, stem length,
                  season, and volume commitments.
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Key Takeaways Tab */}
        <TabsContent value="takeaways" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>1. Volume Dominance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rosaprima sells <strong>100M+ stems/year</strong> — no direct
                  competitor matches their combination of volume, variety count
                  (150+), and luxury brand positioning. They are 6x+ larger than
                  Alexandra Farms, the nearest competitor with disclosed volume.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Most Differentiated Threat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Alexandra Farms</strong> doesn&apos;t compete
                  head-to-head on hybrid teas but{" "}
                  <strong>
                    owns the garden rose niche for weddings and events
                  </strong>
                  . Their exclusive David Austin and Wabara licenses create a
                  moat Rosaprima cannot easily replicate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Strongest Direct Challenger</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Naranjo Roses</strong> is the strongest direct
                  challenger — similar Ecuador provenance, 91+ varieties, exports
                  to 61+ countries, and diversified product lines including
                  preserved roses (a line Rosaprima lacks).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Price Premium Is Working</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Standard Ecuador wholesale runs{" "}
                  <strong>$1.00–$1.50/stem</strong> while Rosaprima commands{" "}
                  <strong>$2.50–$5.00+</strong>. This{" "}
                  <strong>2–4x price premium</strong> validates their brand
                  differentiation and quality positioning in the luxury tier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Sustainability Is Table Stakes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Native Blooms (95% recyclable packaging), Naranjo (Rainforest
                  Alliance), and others are investing heavily in sustainability.
                  This is{" "}
                  <strong>no longer a differentiator but a requirement</strong>{" "}
                  to compete in premium markets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Strategic Watch: Wedding Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rosaprima&apos;s <strong>Floraprima</strong> brand directly
                  targets the wedding flower market where Alexandra Farms
                  dominates. This head-to-head collision in the highest-margin
                  segment will be the most important competitive dynamic to
                  watch.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-center text-xs text-muted-foreground">
        <p>
          Rosaprima Competitive Analysis &middot; South America Premium Rose
          Market &middot; March 2026
        </p>
        <p className="mt-1">
          Sources: Rosaprima, Naranjo Roses, Alexandra Farms, Royal Flowers
          Group, Rio Roses, Native Blooms, Thursd, Florists&apos; Review,
          Florabundance, Potomac Floral Wholesale
        </p>
      </footer>
    </div>
  );
}
