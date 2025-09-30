import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, Battery, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center">
                <Zap className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                GreenGrid
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Renewable Energy Orchestration Platform for Smart Campus Management
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              AI-powered energy optimization for solar, wind, and battery systems with real-time monitoring and predictive analytics.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6">
                Open Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-Time Monitoring</CardTitle>
              <CardDescription>
                Live visualization of energy flow across solar, wind, battery, and grid connections
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>AI Forecasting</CardTitle>
              <CardDescription>
                24-hour predictions with 92% accuracy using ML models and weather data
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-success" />
              </div>
              <CardTitle>Smart Optimization</CardTitle>
              <CardDescription>
                Automated battery scheduling and peak shaving to minimize costs and carbon footprint
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Vendor Neutral</CardTitle>
              <CardDescription>
                Works with any hardware through open protocols: Modbus, OPC-UA, MQTT, BACnet
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">92%</p>
              <p className="text-sm text-muted-foreground mt-2">Forecast Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-success">42%</p>
              <p className="text-sm text-muted-foreground mt-2">Cost Reduction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">24/7</p>
              <p className="text-sm text-muted-foreground mt-2">Real-Time Monitoring</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary">Zero</p>
              <p className="text-sm text-muted-foreground mt-2">Vendor Lock-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Optimize Your Energy?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start monitoring and controlling your renewable energy systems with intelligent automation
        </p>
        <Link to="/dashboard">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Go to Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;
